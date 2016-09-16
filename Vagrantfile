# -*- mode: ruby -*-
# vi: set ft=ruby :

unless Vagrant.has_plugin?('vagrant-vbguest')
  system("vagrant plugin install vagrant-vbguest")
end

host = {name: 'geoserver',
        hostname: 'geoserver',
        ip: '10.0.0.10',
        environment: 'demo',
        node_role: 'geoserver',
        cpu: '2',
        mem: '2048'}

Vagrant.configure("2") do |config|
  config.vm.box = "puphpet/ubuntu1404-x64"             # terraform ami-ed82e39e
  config.vm.box_check_update = false
  config.vbguest.auto_update = true
  config.vm.define host[:name] do |vm_config|
    vm_config.vm.hostname = host[:hostname]
    vm_config.vm.network :private_network, ip: host[:ip]
    vm_config.vm.synced_folder "puppet/hieradata", "/etc/puppetlabs/code/environments/#{host[:environment]}/hieradata"
    vm_config.vm.synced_folder "puppet/manifests", "/etc/puppetlabs/code/environments/#{host[:environment]}/manifests"
    vm_config.vm.synced_folder "puppet/modules",   "/etc/puppetlabs/code/environments/#{host[:environment]}/modules"
    vm_config.vm.synced_folder "docker-geoserver", "/opt/docker/docker-geoserver"
    vm_config.vm.synced_folder "docker-postgis",   "/opt/docker/docker-postgis"
    vm_config.vm.provision "file", source: "puppet/hiera.yaml", destination: "/tmp/hiera.yaml"
    vm_config.vm.provision "file", source: "docker-compose.yml", destination: "/opt/docker/docker-compose.yml"
    vm_config.vm.provider "virtualbox" do |vbox|
      vbox.name = "#{vm_config.vm.hostname}"
      vbox.customize ["modifyvm", :id, "--memory", "#{host[:mem]}"]
      vbox.customize ["modifyvm", :id, "--cpus", "#{host[:cpu]}"]
      vbox.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    end
    vm_config.vm.provision 'shell' do |s|
      s.upload_path = "/home/vagrant/vagrant-shell"
      s.path = "bootstrap.sh"
      s.args = "#{host[:environment]} #{host[:node_role]}"
    end
  end
end
